import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1586136194012-35ceaddbd773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />
        
            <div className={styles.profile}>
                <Avatar src="https://github.com/lucasmiko.png"/>
                <strong>Lucas Mikó</strong>
                <span>Front-end React Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Edit your profile
                </a>
            </footer>
        
        </aside>
    );
}