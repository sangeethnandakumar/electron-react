import React from 'react';
import { Keys, Menu, MenuBar, Separator } from 'react-app-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'react-app-menu/dist/styles/react-app-menu.css';

export default function AppMenu() {
    return (
        <div className="menu-bar">
            <MenuBar onSelect={(menuId) => console.log(menuId)} expandIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                <Menu className="menu" label='File' focusKey={"F"}>
                    <Menu label='New'>
                        <Menu menuId='NewNotebook' label='Notebook' />
                        <Menu menuId="NewNote" label='Note' hotKeys={Keys.ctrlAlt('N')} />
                        <Separator />
                        <Menu label="Folder" hotKeys={Keys.ctrlAlt("F")} onSelect={() => console.log('Folder selected')} />
                    </Menu>
                    <Menu label='Preferences' hotKeys={Keys.altShift("S")} />
                    <Separator />
                    <Menu label='Exit' hotKeys={Keys.altShift("S")} />
                </Menu>
            </MenuBar>
        </div>
    );
}