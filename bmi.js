class Maincomp extends React.Component {
	constructor(props) {
		super(props);
		this.state= {weights:props.list};
		this.handlekgs = this.handlekgs.bind(this);
	}


	handlekgs(event) {
		const cal = event.target.value;
		const pounds = cal * 2.20462262185;
		this.state.weights[0].pounds = pounds;
		this.state.weights[0].kgs = cal;
		this.setState({weights:this.state.weights});
		console.log(this.state.weights);
	}




	
	

	render () {
	

	

		
	
		return (
			<form>
			<label> Enter the Weight in Kgs </label>
			<input type="text" value={this.state.weights[0].kgs} onChange={this.handlekgs} />
			<br/> <br/>

			<label> Enter Weight In Pounds  </label>
			<input type="text" value={this.state.weights[0].pounds} />
			</form>
			);
	}
}





const list = [{kgs:"",pounds:""}]

ReactDOM.render(
 <Maincomp  list={list} />,
 document.getElementById('imp')
 );