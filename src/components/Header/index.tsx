import style from './style.module.css'

import aplicationLogo from '../../assets/logo.svg'

export function Header() {
    return (
        <header className={style.header}>
            <img src={aplicationLogo} alt="application logo" />
        </header>
    )
}