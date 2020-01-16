import React, { Component } from "react";

export default class CardGallery extends Component {

	state = {
		modalData: [],
		modalRequest: false
	}

	generateModal = (i) => {
		this.setState({
			modalData: this.props.data[i],
			modalRequest: true
		})
	}

	removeModal = () => {
		this.setState({
			modalRequest: false
		})
	}

	render() {
		return (
			<React.Fragment>
				<div id="gallery" className="gallery">
					{this.props.data.map((item, i) => (
						<div key={i} className="card" onClick={ this.generateModal.bind(this, i) }>
							<div className="card-img-container">
								<img className="card-img" src={item.picture.medium} alt="" />
							</div>
							<div className="card-info-container">
								<h3 className="card-name cap">
									{item.name.first} {item.name.last}
								</h3>
								<p className="card-text">{item.email}</p>
								<p className="card-text cap">{item.location.city}</p>
							</div>
						</div>
					))}

					{this.state.modalRequest === true ?
						<div className="modal-container">
							<div className="modal">
								<button onClick={ this.removeModal } type="button" id="modal-close-btn" className="modal-close-btn"><strong>X</strong></button>
								<div className="modal-info-container">
									<img className="modal-img" src={this.state.modalData.picture.medium} alt="" />
									<h3 id="name" className="modal-name cap">{this.state.modalData.name.first} {this.state.modalData.name.last}</h3>
									<p className="modal-email">{this.state.modalData.email}</p>
									<p className="modal-text cap" id="city">{this.state.modalData.city}</p>
									<hr />
									<p className="modal-text" id="phone">{this.state.modalData.phone}</p>
									<p className="modal-text" id="address">{this.state.modalData.location.street.number} {this.state.modalData.location.street.name}</p>
									<p className="modal-text" id="dob">{this.state.modalData.dob.date}</p>
								</div>
							</div>
						</div>
						:
						false
					}
				</div>
			</React.Fragment>
		)
	}
};


