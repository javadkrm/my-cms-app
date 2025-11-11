import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

import { Accordion } from 'react-bootstrap';

import RocketIcon from '@mui/icons-material/Rocket';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FolderIcon from '@mui/icons-material/Folder';
import PeopleIcon from '@mui/icons-material/People';
import WidgetsIcon from '@mui/icons-material/Widgets';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MonitorIcon from '@mui/icons-material/Monitor';
import PushPinIcon from '@mui/icons-material/PushPin';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <h2 className='sidebarTitle'>My Dashboard</h2>
        <ul className="sidebarList">
          <h2 className="sidebarListTitle">داشبورد</h2>
          <Link to='/' className='sidebarListItem'>
            <HomeIcon className='sidebarListItemIcon' />
            <li className="sidebarListItemText">خانه</li>
          </Link>
          <Link to='/users' className='sidebarListItem'>
            <PersonIcon className='sidebarListItemIcon' />
            <li className="sidebarListItemText">اعضا</li>
          </Link>
          <Link to='/newusers' className='sidebarListItem'>
            <GroupAddIcon className='sidebarListItemIcon' />
            <li className="sidebarListItemText">اعضای جدید</li>
          </Link>
          <Link to='/projects' className='sidebarListItem'>
            <RocketIcon className='sidebarListItemIcon' />
            <li className="sidebarListItemText">پروژه</li>
          </Link>
        </ul>
        <ul className="sidebarList">
          <h2 className="sidebarListTitle">مفاهیم</h2>
          <Accordion className='accordion' defaultActiveKey="0">
            <Accordion.Item className='accordionButton' eventKey="0">
              <Accordion.Header>
                <PsychologyIcon className='accordionHeaderIcon'/>
                هوش مصنوعی</Accordion.Header>
              <Accordion.Body>
                <ul className='accordionList'>
                  <Link>
                    <li className="accordionListItem">
                      چت
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                      تصویر
                    </li>
                  </Link>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordionButton' eventKey="1">
              <Accordion.Header>
                <FolderIcon className='accordionHeaderIcon'/>
                پروژه ها</Accordion.Header>
              <Accordion.Body>
                <ul className='accordionList'>
                  <Link>
                    <li className="accordionListItem">
                      پروژه های من
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                      ایجاد پروژه
                    </li>
                  </Link>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordionButton' eventKey="2">
              <Accordion.Header>
                <PeopleIcon className='accordionHeaderIcon'/>
                مشتریان</Accordion.Header>
              <Accordion.Body>
                <ul className='accordionList'>
                  <Link>
                    <li className="accordionListItem">
                      لیست
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                      ویژه ها
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                      ایجاد
                    </li>
                  </Link>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordionButton' eventKey="3">
              <Accordion.Header>
                <WidgetsIcon className='accordionHeaderIcon'/>
                محصولات</Accordion.Header>
              <Accordion.Body>
                <ul className='accordionList'>
                  <Link>
                    <li className="accordionListItem">
                      لیست محصولات
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                      ایجاد محصول
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                      ویرایش
                    </li>
                  </Link>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ul>
        <ul className="sidebarList">
          <h2 className="sidebarListTitle">اجزای رابط کاربری</h2>
          <Accordion className='accordion' defaultActiveKey="0">
            <Accordion.Item className='accordionButton' eventKey="0">
              <Accordion.Header>
                <PushPinIcon className='accordionHeaderIcon'/>
                مشترک
                 </Accordion.Header>
              <Accordion.Body>
                <ul className='accordionList'>
                  <Link>
                    <li className="accordionListItem">
                      دکمه
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                      گرید
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                      تایپوگرافی
                    </li>
                  </Link>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordionButton' eventKey="1">
              <Accordion.Header>
                <InsertCommentIcon className='accordionHeaderIcon'/>
                بازخورد
                 </Accordion.Header>
              <Accordion.Body>
                <ul className='accordionList'>
                  <Link>
                    <li className="accordionListItem">
                        هشدار
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                       دیالوگ
                    </li>
                  </Link>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordionButton' eventKey="2">
              <Accordion.Header>
                <MonitorIcon className='accordionHeaderIcon'/>
                نمایش داده ها
                </Accordion.Header>
              <Accordion.Body>
                <ul className='accordionList'>
                  <Link>
                    <li className="accordionListItem">
                      آواتار
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                       نشان
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                      ایجاد
                    </li>
                  </Link>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='accordionButton' eventKey="3">
              <Accordion.Header>
                <SummarizeIcon className='accordionHeaderIcon'/>
                فرم ها
                </Accordion.Header>
              <Accordion.Body>
                <ul className='accordionList'>
                  <Link>
                    <li className="accordionListItem">
                       چک باکس
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                       انتخاب تاریخ
                    </li>
                  </Link>
                  <Link>
                    <li className="accordionListItem">
                      ویرایش
                    </li>
                  </Link>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ul>
      </div>
    </div>
  )
}
