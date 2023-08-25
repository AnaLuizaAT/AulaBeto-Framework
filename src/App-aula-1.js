import logo from './logo.svg'
import './App.css'
import { render } from '@testing-library/react'
import { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Letícia',
            counter: 0
        }
    }

    handleClick = () => {
        const { name } = this.state
        console.log(`Cliquei em ${name}`)
        this.setState({ name: 'Nome mudou' })
    }

    handleClickButton = () => {
        const { counter } = this.state
        console.log(`Cliquei no botão`)
        this.setState({ counter: counter + 1 })
    }

    render() {
        const { name, counter } = this.state

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        <span onClick={this.handleClick}>
                            {name} - {counter}
                        </span>
                        <br />
                        <br />
                        <button onClick={this.handleClickButton}>Botão</button>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        A soma de 1 + 1 é {1 + 1}
                    </a>
                </header>
            </div>
        )
    }
}

// O export default é obrigatório, pois é o que permite que o componente seja importado em outros arquivos
export default App

// extensão jsx é opcional, mas é uma boa prática para diferenciar os arquivos que contém html junto com js
