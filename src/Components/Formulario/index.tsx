import React, { ChangeEvent } from "react";
import "./Formulario.css";

type State = {
  Cep: number | undefined;
  Rua: string;
  Numero: number | undefined;
  Complemento: string;
  Bairro: string;
  Cidade: string;
  Estado: string;
};

class Form extends React.Component<{}, State> {
  state = {
    Cep: 0,
    Rua: "",
    Numero: 0,
    Complemento: "",
    Bairro: "",
    Cidade: "",
    Estado: "",
  };

  render() {
    return (
      <div className="container">
        <form>
          <label htmlFor="cep"> Digite Seu CEP</label>
          <input
            type="text"
            id="cep"
            value={this.state.Cep}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              this.setState({ Cep: Number(event.target.value) })
            }
          />

          <label htmlFor="rua">Digite sua rua:</label>
          <input
            type="text"
            id="rua"
            value={this.state.Rua}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              this.setState({ Rua: event.target.value })
            }
          />

          <label htmlFor="numero">Digite o Numero da sua casa</label>
          <input
            type="text"
            id="numero"
            value={this.state.Numero}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              this.setState({ Numero: Number(event.target.value) })
            }
          />

          <label htmlFor="complemento">Complemento</label>
          <input
            type="text"
            id="complemento"
            value={this.state.Complemento}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              this.setState({ Complemento: event.target.value })
            }
          />
          <label htmlFor="bairro">Bairro</label>
          <input
            type="text"
            id="bairro"
            value={this.state.Bairro}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              this.setState({ Bairro: event.target.value })
            }
          />

          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            value={this.state.Cidade}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              this.setState({ Cidade: event.target.value })
            }
          />

          <label htmlFor="estado">Estado</label>
          <input
            type="text"
            id="estado"
            value={this.state.Estado}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              this.setState({ Estado: event.target.value })
            }
          />
        </form>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default Form;
