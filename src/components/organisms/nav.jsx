import React, {useState} from 'react';
import {Menu} from 'antd';
import {Link} from "gatsby"

const items = [
    {
        label: (<Link to="/">Главная</Link>),
        key: 'home',
        // icon: <MailOutlined />,
    },
    {
        label: (<Link to="#about">О храме</Link>),
        key: 'about',
        // icon: <MailOutlined />,
    },
    {
        label: (<Link to="#schedule">Расписание богослужений</Link>),
        key: 'schedule',
        // icon: <MailOutlined />,
    },
    {
        label: (<Link to="#contacts">Контакты</Link>),
        key: 'contacts',
        // icon: <MailOutlined />,
    },
];
const Nav = () => {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        // console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <nav>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal"
                  items={items} />
        </nav>
    )
};
export default Nav;