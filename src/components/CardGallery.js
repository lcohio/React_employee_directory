import React, { Component } from "react"

export default class CardGallery extends Component {

	state = {
		modalRequest: false,
		modalData: [],
		currentIndex: ''
	}

	openModal = (i) => {
		this.setState({
			modalRequest: true,
			modalData: this.props.data[i],
			currentIndex: i
		})
	}

	closeModal = () => {
		this.setState({
			modalRequest: false
		})
	}

	incrementModalData = () => {
		if (this.state.currentIndex < 11) {
			this.setState({
				currentIndex: this.state.currentIndex + 1,
				modalData: this.props.data[this.state.currentIndex + 1]
			})
		}
	}

	decrementModalData = () => {
		if (this.state.currentIndex > 0) {
			this.setState({
				currentIndex: this.state.currentIndex - 1,
				modalData: this.props.data[this.state.currentIndex - 1]
			})
		}
	}

	render() {
		return (

			<div id="gallery" className="gallery">

				{this.props.data.map((item, i) => (
					<div key={i} className="card" onClick={this.openModal.bind(this, i)}>
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
							<button onClick={this.closeModal} type="button" id="modal-close-btn" className="modal-close-btn"><strong>X</strong></button>
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
						<div className="modal-btn-container">
							<button onClick={this.decrementModalData} type="button" id="modal-prev" className="modal-prev btn">Prev</button>
							<button onClick={this.incrementModalData} type="button" id="modal-next" className="modal-next btn">Next</button>
						</div>
					</div>
					:
					false
				}
				
			</div>
		)
	}
};


