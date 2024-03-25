import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header titulo="Adopta Un Perrito" />
      <main className="galeria">
        <MyCard
          image="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="chocolo"
          desc=" Rocky es un perro extremadamente cariñoso y leal. Le encanta pasar tiempo con las personas y siempre está buscando una oportunidad para recibir caricias y jugar."
          tag="Mestizo"
          colorTag="danger"
        />
        <MyCard
          image="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="León"
          desc="Es muy enérgico y disfruta de largas caminatas y juegos al aire libre."
          tag="Mestizo"
          colorTag="success"
        />
        <MyCard
          image="https://images.unsplash.com/photo-1477973770766-6228305816df?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Hodor"
          desc="Es bastante inteligente y responde bien a la capacitación básica."
          tag="Pitbull"
          colorTag="warning"
        />
        <MyCard
          image="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Sayen"
          desc="Se lleva bien con otros perros después de una adecuada presentación, pero preferiría ser la única en su hogar para recibir toda la atención y el amor que merece."
          tag="Mestiza"
          colorTag="info"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
