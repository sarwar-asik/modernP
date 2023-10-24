import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  ThunderboltOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  MessageOutlined,
  DatabaseOutlined,
  ControlOutlined,
  UsergroupAddOutlined,
  ContainerOutlined,
  TabletOutlined,
  QuestionOutlined,
  PlusSquareOutlined,
  InsertRowLeftOutlined,
  UserOutlined,
  SnippetsOutlined,
  ContactsFilled,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "@/constant/userRole";
import DropDownMenuUI from "../ui/DropDown/DropDownMenu";
import serviceItems from "../ui/DropDown/DropDownServiceItems";

export const sidebarItems = (role: string ) => {
  // console.log(role,"role from sidebarItem");
  // console.log(role, "form side bar items");

  const navBarItems: MenuProps["items"] = [
    {
      label: <Link href={`/`}> Home</Link>,

      key: `/Home`,
    },
    {
      label: <Link href={`/service`}> Service</Link>,
      key: `/service`,
    },
    {
      key: "about",
      label: <Link href="about-us">ABout</Link>,
    },
    {
      key: "blogs",
      label: <Link href="blogs">Blogs</Link>,
    },
    {
      key: "contact",
      label: <Link href="contact">Contact Us</Link>,
    },
  ];

  const publicSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/`}> Home</Link>,
      icon: <HomeOutlined />,
      key: `/Home`,
    },
    {
      label: <Link href={`/service`}> Service</Link>,
      key: `/service`,
      icon: <InsertRowLeftOutlined />,
      children: [
        { label: <Link href="/services">All Design</Link>, key: "/all-desing" },
        {
          label: <Link href="/available">Available Design</Link>,
          key: "/available",
        },
        { label: <Link href="/services">Upcoming</Link>, key: "/upcoming" },
      ],
    },
    {
      key: "about",
      label: <Link href="about-us">ABout</Link>,
      icon: <UserOutlined />,
    },
    {
      key: "blogs",
      label: <Link href="blogs">Blogs</Link>,
      icon: <SnippetsOutlined />,
    },
    {
      key: "contact",
      label: <Link href="contact">Contact Us</Link>,
      icon: <ContactsFilled />,
    },
  ];
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/`}> Home</Link>,
      key: `/Home`,
      icon: <HomeOutlined />,
    },
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}> Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/user/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/cart`}>Cart</Link>,
      icon: <ShoppingCartOutlined />,
      key: `/${role}cart`,
    },
    {
      label: <Link href={`/${role}/booking`}>Bookings</Link>,
      icon: <ShopOutlined />,
      key: `/${role}/booking`,
    },
    {
      label: <Link href={`/${role}/reviews`}>Reviews</Link>,
      icon: <ThunderboltOutlined />,
      key: `/${role}/reviews`,
    },
    {
      label: <Link href={`/${role}/notification`}>Notification</Link>,
      icon: <MessageOutlined />,
      key: `/${role}/notification`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/service`}>Services</Link>,
      icon: <DatabaseOutlined />,
      key: `/${role}/service`,
    },
    {
      label: <Link href={`/${role}/category`}>Category</Link>,
      icon: <ControlOutlined />,
      key: `/${role}/category`,
    },
    {
      label: <Link href={`/${role}/users`}>users</Link>,
      icon: <UsergroupAddOutlined />,
      key: `/${role}/users`,
    },
    {
      label: <Link href={`/${role}/bookings`}>booking</Link>,
      icon: <ShopOutlined />,
      key: `/${role}/bookings`,
    },
    {
      label: "Content Manage",
      icon: <ContainerOutlined />,
      key: `contents`,
      children: [
        {
          label: <Link href={`/${role}/blogs`}>blogs</Link>,
          icon: <TabletOutlined />,
          key: `/${role}/blogs`,
        },
        {
          label: <Link href={`/${role}/FAQ`}>FAQ</Link>,
          icon: <QuestionOutlined />,
          key: `/${role}/FAQ`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Manage User",
      icon: <TableOutlined />,
      key: `/${role}/manage-user`,
      children: [
        {
          label: <Link href={`/super_admin/users`}>All Users</Link>,
          icon: <UsergroupAddOutlined />,
          key: `/${role}/admin`,
        },
        {
          label: <Link href={`/super_admin/create_admin`}>Create Admin</Link>,
          icon: <PlusSquareOutlined />,
          key: `/${role}/user`,
        },
      ],
    },
  ];

  if (role === USER_ROLE.user) return userSidebarItems;
  else if (role === USER_ROLE.admin) return adminSidebarItems;
  else if (role === USER_ROLE.superAdmin) return superAdminSidebarItems;
  else if (role === "sidebar") return publicSidebarItems;
  else if (role === "nav") return navBarItems;
};
