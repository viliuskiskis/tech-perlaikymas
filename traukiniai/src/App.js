import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import React from 'react';
import traukinysImg from './img/razor_1024x1024@2x.webp'

function App() {
  return (

    <div>
      <div className="App">
        <p>
          traukinio peržiūros langas su vagonų sąrašu TrainViewComponent
          traukinio pridėjimo/redagavimo langas
          vagono pridėjimo langas
          vagonų peržiūros langas
          vieno bilieto patikros langas su traukinio ir vagono aprašymu
          bilietų pirkimo langas ?
        </p>
      </div>
      <h1>Traukinių sąrašas</h1>
      <TrainListComponent />
      <h1>Traukinio peržiūros langas su vagonų sąrašu</h1>
      <TrainViewComponent />
    </div>
  );
}

class TrainViewComponent extends React.Component {
  render() {
    return (
      <div>
        <TrainCardMoreRenderedComponent />
        <CarriageListComponent />
      </div>
    );
  }
}

class CarriageListComponent extends React.Component {
  render() {
    return (
      <div className="container p-4">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row g-md-4">
            <CarriageCardRenderedComponent />
            <CarriageCardRenderedComponent />
            <CarriageCardRenderedComponent />
            <CarriageCardRenderedComponent />
            <CarriageCardRenderedComponent />
            <CarriageCardRenderedComponent />
          </div>
        </div >
      </div>
    );
  }
}

class CarriageCardRenderedComponent extends React.Component {
  render() {
    return (
      <CarriageCardComponent CardTitle="vagonas"
        CardText="vagono pavadinimas" //"Nuostabiai nuskus tavo skruostą"
        BtnText="detaliau" //pirkti
        BtnURL="traukinioURL"
        ImgAlt="traukinys [traukinio pavadinimas]"
        ImgURL={traukinysImg} />
    );
  }
}

class CarriageCardComponent extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card text-center">
          <img src={this.props.ImgURL} className="card-img-top" alt={this.props.ImgAlt} />
          <div className="card-body">
            <h5 className="card-title fs-4"> {this.props.CardTitle} </h5>
            <p className="card-text fw-bold fs-2">{this.props.CardText}</p>
            <div className="d-grid gap-2">
              <a href={this.props.BtnURL} className="btn btn-primary btn-outline-warning btn-lg">{this.props.BtnText}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class TrainListComponent extends React.Component {
  render() {
    return (
      <div className="container p-4">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row g-md-4">
            <TrainCardLessRenderedComponent />
            <TrainCardLessRenderedComponent />
            <TrainCardLessRenderedComponent />
            <TrainCardLessRenderedComponent />
            <TrainCardLessRenderedComponent />
            <TrainCardLessRenderedComponent />
            <TrainCardLessRenderedComponent />
            <TrainCardLessRenderedComponent />
          </div>
        </div >
      </div>
    );
  }
}

class TrainCardLessRenderedComponent extends React.Component {
  render() {
    return (
      <TrainCardLessComponent CardTitle="traukinys"
        CardText="traukinio numeris"
        BtnText="detaliau"
        BtnURL="traukinioURL" />
    );
  }
}

class TrainCardMoreRenderedComponent extends React.Component {
  render() {
    return (
      <TrainCardMoreComponent CardTitle="traukinys"
        TrainNumber="traukinio numeris"
        ProductionDate="pagaminimo data"
        Manufacturer="pagaminusi įmonė"
        DestinationCity="miestas į kurį važiuoja"
        SourceCity="miestas iš kurio važiuoja"
        BtnText="redaguoti"
        BtnURL="redaguotitraukiniURL"
        ImgAlt="traukinys [Numeris]"
        ImgURL={traukinysImg} />
    );
  }
}

class TrainCardLessComponent extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card text-center">
          <img src={this.props.ImgURL} className="card-img-top" alt={this.props.ImgAlt} />
          <div className="card-body">
            <h5 className="card-title fs-4"> {this.props.CardTitle} </h5>
            <p className="card-text fw-bold fs-2">{this.props.CardText}</p>
            <div className="d-grid gap-2">
              <a href={this.props.BtnURL} className="btn btn-primary btn-outline-warning btn-lg">{this.props.BtnText}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class TrainCardMoreComponent extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card text-center">
          <img src={this.props.ImgURL} className="card-img-top" alt={this.props.ImgAlt} />
          <div className="card-body">
            <h5 className="card-title fs-4"> {this.props.CardTitle} </h5>
            <ul className="list-group list-group-flush">
              //<li className="list-group-item">TrainNumber {this.props.TrainNumber}</li>
              <li className="list-group-item">ProductionDate {this.props.ProductionDate}</li>
              <li className="list-group-item">Manufacturer {this.props.Manufacturer}</li>
              <li className="list-group-item">DestinationCity {this.props.DestinationCity}</li>
              <li className="list-group-item">SourceCity {this.props.SourceCity}</li>
            </ul>
            <div className="d-grid gap-2">
              <a href={this.props.BtnURL} className="btn btn-primary btn-outline-warning btn-lg">{this.props.BtnText}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* TrainCardComponent.propTypes = {
  CardTitle: PropTypes.string.isRequired,
  CardText: PropTypes.string.isRequired,
  BtnText: PropTypes.string.isRequired,
  ImgAlt: PropTypes.string.isRequired,
  ImgURL: PropTypes.string.isRequired,
}; */

export default App;
