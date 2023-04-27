import React from "react";
import { Header } from "./style";
import  Dropdown from "react-bootstrap/Dropdown";
import { WhatsappLogo } from 'phosphor-react'
export default function Menu() {
    return (
        <Header>
            <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: '#e5b6ec', color: "#f5f5f5", border: 'none'}}>
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle style={{backgroundColor: 'white', border: 'none', color: '#121214'}}>Categorias</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Hidratantes</Dropdown.Item>
                                <Dropdown.Item>Sabonetes</Dropdown.Item>
                                <Dropdown.Item>Cosméticos</Dropdown.Item>
                                <Dropdown.Item>Perfumes</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </Dropdown.Menu>
            </Dropdown>
            <div>
                <a href="https://wa.me/5521964420866"><button className="whatsapp"><WhatsappLogo style={{widt: '32px', height: '32px'}}/> Whatsapp</button></a>
            </div>
        </Header>
    )
}