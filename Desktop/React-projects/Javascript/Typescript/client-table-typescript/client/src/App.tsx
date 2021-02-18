import "./App.css";
import { FunctionComponent } from 'react';

import { Button, Table, Text, Modal, useModal } from "@geist-ui/react";



const ClientTable: FunctionComponent = () => {
  const data = [
    {
      firstName: "Daniel",
      lastName: "Bwalya",
      email: "danielbwalya620@gmail.com",
    },
    {
      firstName: "Jonathan",
      lastName: "Bwalya",
      email: "jonathanbwalya620@gmail.com",
    },
    {
      firstName: "David",
      lastName: "Bwalya",
      email: "davidbwalya620@gmail.com",
    },
  ];

  return (
        <Table data={data}>
          <Table.Column prop="firstName" label="firstName" />
          <Table.Column prop="lastName" label="lastName" />
          <Table.Column prop="email" label="email" />
        </Table>
      
  )
};

const ClientModal: FunctionComponent = () => {
  const { visible, setVisible, bindings } = useModal()
  return (
    <div>
      <Button  type="success" auto onClick={() => setVisible(true)}>Add Client</Button>
      <Modal {...bindings}>
        <Modal.Title>Modal</Modal.Title>
        <Modal.Subtitle>This is a modal</Modal.Subtitle>
        <Modal.Content>
          <p>Client has been added successfully</p>
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>Cancel</Modal.Action>
        <Modal.Action> Submit </Modal.Action>
      </Modal>
    </div>
  )
}
const ClientText: FunctionComponent = () => {
  const text = 'Client Table'
  return (
      <Text h1>{text}</Text>
  )
};

function App() {
  
  return (
    <div className="App">
      <div>
        <ClientText/>
        <ClientTable />
        <ClientModal />
      </div>
    </div>
  );
}

export default App;