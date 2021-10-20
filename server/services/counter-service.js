const { Appeal, User } = require('../../database')
const moment = require('moment')

class CounterServices {
  constructor() {
    this.getMetricHistory = this.getMetricHistory
  }

  async getStatAppeals() {
    try {
      const appeals = await Appeal.find()
      const history = await this.getMetricHistory(appeals)

      return {
        quantity: appeals.filter((e) => e.status == 'open').length,
        history,
      }
    } catch (e) {
      console.log(e)
    }
  }

  async getStatUsers() {
    try {
      const users = await User.find()
      const history = await this.getMetricHistory(users)

      return {
        quantity: users.length,
        history,
      }
    } catch (e) {
      console.log(e)
    }
  }

  async getMetricHistory(data) {
    const history = []
    for (let i = 1; i < 8; i++) {
      history.push(0)
      data.forEach((e) => {
        if (e.date == moment().subtract(i, 'days').format('DD.MM.YYYY')) {
          history[i - 1]++
        }
      })
    }

    return history
  }
}

module.exports = new CounterServices()
