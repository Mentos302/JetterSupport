import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Главная",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Обращения"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Идеи",
    to: "/appeals/idea",
    icon: "cil-star",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Закупить",
    to: "/appeals/tobuy",
    icon: "cil-puzzle",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Проблемы",
    to: "/appeals/problem",
    icon: "cil-warning",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Рекламации",
    to: "/appeals/reclamation",
    icon: "cil-ban",
  },
];

export default _nav;
