'use client'
import React, { useState } from 'react';
import './Sidebar.scss';
import Hamburger from '../Icons/Hamburger';
import Image from 'next/image';
import MashroonaLogo from '../../_assests/images/mashroona.png';
import ProfileImage from '../../_assests/images/profile-image.png';
import HomeIcon from '../Icons/Home';
import SalariesIcon from '../Icons/Salaries';
import InfoPanelIcon from '../Icons/InfoPanel';
import VacationsIcon from '../Icons/Vacations';
import AttendaceIcon from '../Icons/Attendace';
import OrganizationalStructureIcon from '../Icons/OrganizationalStructure';

export default function Sidebar(){
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <>
            <aside className={`side-bar ${isCollapsed? 'collapsed' : ''}`}>
                <div className='side-bar__header'>
                    <div className='side-bar__logo'>
                        <Image src={MashroonaLogo} alt="company logo" width={177} height={49} />
                    </div>
                    <button className='side-bar__hamburger' aria-expanded={!isCollapsed} onClick={() => setIsCollapsed(!isCollapsed)}>
                        <Hamburger/>
                    </button>
                </div>
                <div className='side-bar__profile'>
                        <Image src={ProfileImage} alt="profile picture"/>
                        <span className='side-bar__profile__name'>محمد شتات</span>
                        <span className='side-bar__profile__email'>Shatat@menatech.edu.jo</span>
                       
                </div>
                <nav className='side-bar__nav'>
                    <ul className='side-bar__list'>
                        <li className='side-bar__menu-title'>
                            الرئيسية
                        </li>
                        <li className='side-bar__link'>
                            <a href="" className='active'>
                                <HomeIcon/>
                                <span className='side-bar__link-text'>القائمة الرئيسية</span>
                            </a>
                        </li>
                        <li className='side-bar__menu-title'>
                            <span className='side-bar__link-text'>الرواتب</span>
                        </li>                     
                        <li className='side-bar__link'>
                            <a href="" className=''>
                                <SalariesIcon/>
                                <span className='side-bar__link-text'>صرف الرواتب</span>
                            </a>
                        </li>
                        <li className='side-bar__menu-title'>
                            <span>الموارد البشرية</span>
                        </li>
                        <li className='side-bar__link'>
                            <a href="" className=''>
                                <InfoPanelIcon/>
                                <span className='side-bar__link-text'>لوحة معلوماتي</span>
                            </a>
                        </li>
                        <li className='side-bar__link'>
                            <a href="" className=''>
                                <VacationsIcon/>
                                <span className='side-bar__link-text'>الإجازات والمغادرات</span>
                            </a>
                        </li>
                        <li className='side-bar__link'>
                            <a href="" className=''>
                                <AttendaceIcon/>
                                <span className='side-bar__link-text'>الحضور والوردية</span>
                            </a>
                        </li>
                        <li className='side-bar__link'>
                            <a href="" className=''>
                                <OrganizationalStructureIcon/>
                                <span className='side-bar__link-text'>الهيكلة التنظيمية</span>
                            </a>
                        </li>

                    </ul>
                </nav>
            </aside>

        </>
    )
}