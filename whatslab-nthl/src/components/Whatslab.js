import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 70vw;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 2fr 1fr;
`;

const Box = styled.div`
  height: 10vh;
  width: 20vw;
`;

const Input = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
`;

const InputPequeno = styled.input`
  width: 13.5vw;
`;

const InputGrande = styled.input`
  width: 42vw;
`;

const TextoNegrito = styled.p`
  font-weight: bold;
`;

class Whatslab extends React.Component {
  state = {
    pessoas: [
      {
        nome: "",
        texto: ""
      }
    ],

    valorInputPessoa: "",
    valorInputTexto: ""
  };

  adicionaPessoa = () => {
    const novaPessoa = {
      nome: this.state.valorInputPessoa,
      texto: this.state.valorInputTexto
    };

    const novoPessoas = [...this.state.pessoas, novaPessoa];

    this.setState({
      pessoas: novoPessoas,
      valorInputPessoa: "",
      valorInputTexto: ""
    });
  };

  onChangeInputPessoa = event => {
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputTexto = event => {
    this.setState({ valorInputTexto: event.target.value });
  };

  render() {
    const listaDeComponentes = this.state.pessoas.map(pessoa => {
      return (
        <div>
          <TextoNegrito>{pessoa.nome}</TextoNegrito>
          <p>{pessoa.texto}</p>
        </div>
      );
    });

    return (
      <Container>
        <Box>{listaDeComponentes}</Box>
        <Input>
          <InputPequeno
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <InputGrande
            value={this.state.valorInputTexto}
            onChange={this.onChangeInputTexto}
            placeholder={"Texto"}
          />
          <button onClick={this.adicionaPessoa}>Adicionar</button>
        </Input>
      </Container>
    );
  }
}

export default Whatslab;
