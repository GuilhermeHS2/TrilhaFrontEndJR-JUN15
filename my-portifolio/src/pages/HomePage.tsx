import React from "react";
import Header from "../components/organisms/Header";
import Card from "../components/molecules/Card";

const HomePage: React.FC = () => {
    return(
        <div>
            <header/>
            <main>
                <Card title="Meu Portifolio">
                    <p>Bem-vindo ao meu Portifolio. Aqui Voce encontrar as minhas habilidade e as minha redes sociais</p>
                </Card>
            </main>
        </div>
    );
};

export default HomePage;