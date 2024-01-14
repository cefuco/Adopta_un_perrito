import React from 'react';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header title="Adopta un perrito" />
            <div className="card-container">
                <MyCard
                    image='src\components\images\pexels-alexandru-rotariu-733416.jpg'
                    name="Bartolo"
                    description="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
                    tagText="Husky"
                    tagColor="primary"
                />
                <MyCard
                    image='src\components\images\pexels-charles-1851164.jpg'
                    name="Messi"
                    description="Es juguetón, amigable y se lleva bien con niños y otros perros."
                    tagText="Golden Retriever"
                    tagColor="secondary"
                />
                <MyCard
                    image='src\components\images\pexels-dominika-roseclay-2023384.jpg'
                    name="Gohan"
                    description="Un cachorro dulce y amoroso que busca un hogar para siempre."
                    tagText="Labrador Retriever"
                    tagColor="success"
                />
                <MyCard
                    image='src\components\images\pexels-pixabay-220938.jpg'
                    name="Princesa"
                    description="Una perrita tranquila y amorosa que busca un hogar cálido."
                    tagText="Chihuahua"
                    tagColor="danger"
                />
            </div>
            <Footer />
        </div>
    );
};

export default App;


