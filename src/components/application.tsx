import { Items } from "./items";
import * as React from "react";
import StateDate from "../data.json";

export interface item{
  value: string;
  id: string;
  packed: boolean;
}

interface IstateProps {
  items: item[];
  value: string;
}

class Application extends React.Component<{}, IstateProps> {
  state = {
    items: StateDate.defaultState,
    value: ''
  };

  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    this.setState({
      value
    });
  };

  handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = this.state.value;
    if(value !== ''){
      const values = { value, id: this.state.items.length + 1, packed: false };
      this.setState({
        items: [values, ...this.state.items],
        value : ''
      });
    }
   
  };
  toggleItem = (itemToToggle:item) => {
      const items = this.state.items.map((item:item) =>{
          if(item.id !== itemToToggle.id) return item;
      return {...itemToToggle,packed: !itemToToggle.packed}    
      })
      this.setState({
        items
      });
  };

  markAllUnPacked =()=>{
    const items = this.state.items.map((item:item)=>{
      return {...item, packed:false}
    });
    this.setState({
      items
    })
  };

  removeItem=(itemToRemove:item)=>{
    this.setState({
      items:this.state.items.filter((item:item)=>item.id !==itemToRemove.id)
    })
  }

  render() {
    const { items } = this.state;
    const packedItems = items.filter((item: any) => item.packed);
    const unpackedItems = items.filter((item: any) => !item.packed);

    return (
      <div className="Application">
        <form className="NewItem" onSubmit={this.handleSubmit}>
          <input
            className="NewItem-input"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input className="NewItem-submit button" type="submit" />
        </form>
        <Items
          title="Unchecked Items"
          items={unpackedItems}
          onToggle={this.toggleItem}
          onRemove={this.removeItem}
        />
        <Items
          title="Checked Items"
          items={packedItems}
          onToggle={this.toggleItem}
          onRemove={this.removeItem}
        />
        <button className="button full-width" onClick={this.markAllUnPacked}>Mark All As Unchecked</button>
      </div>
    );
  }
}

export default Application;
