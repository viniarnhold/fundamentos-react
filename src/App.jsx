
import React from "react";
import './App.css';

import Teste from './components/basics/First';
import ComParametro from './components/basics/ComParametro';
import Fragment from './components/basics/Fragment';
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layouts/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudantsList from "./components/repeater/StudantsList";
import ProductsList from "./components/repeater/ProductsList";
import PairConditional from "./conditional/PairConditional";
import UserInfo from "./conditional/UserInfo";
import Direct from "./components/comunication/Direct";
import Indirect from "./components/comunication/Indirect";

const App = () => {
    return (
        <div className="App">
            <h1 className="Cards">Fundamentos React</h1>
            <div className="Cards">
            <Card titulo="#11 - Comunicação Indireta" color="#0057E7">
                    <Indirect/>
                </Card>
                <Card titulo="#10 - Comunicação Direta" color="#854442">
                    <Direct/>
                </Card>
                <Card titulo="#9 - Renderização Condicional - Pt 2" color="#283655">
                    <UserInfo nome="Jorge Silva" />
                    <UserInfo nome="Carlos Eduardo" />
                    <UserInfo />
                    <UserInfo nome="Clarice Mattos" />
                </Card>
                <Card titulo="#8 - Renderização Condicional - Pt 1" color="#FDF498">
                    <PairConditional numero={15} />
                </Card>
                <Card titulo="#7 - Desafio Products" color="#FEC8C1">
                    <ProductsList />
                </Card>
                <Card titulo="#6 - Listas" color="#3DA4AB">
                    <StudantsList />
                </Card>
                <Card titulo="#5 - Family Members" color="#651E3E">
                    <Family sobrenome="Arnhold">
                        <FamilyMember nome="Vinícius" />
                        <FamilyMember nome="Maria de Lourdes" />
                        <FamilyMember nome="Delcio" />
                    </Family>
                </Card>
                <Card titulo="#4 - Desafio Aleatório" color="#080">
                    <Aleatorio min={100} max={240} />
                </Card>
                <Card titulo="#3 - Conteúdo Fragment" color="#8458B3">
                    <Fragment></Fragment>
                </Card>
                <Card titulo="#2 - Conteúdo Com Parâmetro" color="#0049B7">
                    <ComParametro
                        titulo="Variação do Título!"
                        subtitulo="Testando" />
                </Card>
                <Card titulo="#1 - Conteúdo Teste" color="#ff0028">
                    <Teste></Teste>
                </Card>
            </div>
        </div>
    )
}
export default App;