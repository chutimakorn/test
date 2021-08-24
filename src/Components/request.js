import React from 'react'
import { InputGroup, FormControl, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Request({ onclick,name }) {
    console.log('param1',onclick);
    console.log('param2',name);

    return (

        <div style={{ textAlign: 'center', margin: 20, flex: 20, flexDirection: 'column', display: 'flex' }}>
            <div style={{ flex: 1 ,display:'flex',alignSelf:'center',flexDirection:'column'}}>
                <img src="https://www.inventech.co.th/wp-content/uploads/2017/09/invlogo_bb.png" style={{ height: 100 }} />
            <p>บริษัท อินเวนท์เทค ซิสเท็มส์ (ประเทศไทย) จำกัด</p>
            <p>การประชุมสามัญผู้ถือหุ้น ประจำปี 2564</p>
            <p>หมายเหตุ : หากพบปัญหาในการยื่นแบบคำร้อง กรุณาติดต่อที่เบอร์ 02-021-9121 </p>
            
            </div>


            <hr />
            <div style={{ flexDirection: 'column', display: 'flex', flex: 20, alignContent: 'stretch' }}>


                <div style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <InputGroup className="mb-3" style={{ height: '5%', width: 600, margin: 10 }}>
                        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                        <FormControl
                            placeholder="Name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"

                        />


                    </InputGroup>
                    <InputGroup className="mb-3" style={{ height: '5%', width: 600, margin: 10 }}>
                        <InputGroup.Text id="basic-addon2">Citizen ID/Corporate ID</InputGroup.Text>
                        <FormControl
                            placeholder="Name"
                            aria-label="Username"
                            aria-describedby="basic-addon2"
                            value={name}
                        />


                    </InputGroup>

                </div>
                <div style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                    <InputGroup className="mb-3" style={{ height: '5%', width: 600, margin: 10 }}>
                        <InputGroup.Text id="basic-addon2">Unitholder ID</InputGroup.Text>
                        <FormControl
                            placeholder="Name"
                            aria-label="Username"
                            aria-describedby="basic-addon2"

                        />


                    </InputGroup>
                    <InputGroup className="mb-3" style={{ height: '5%', width: 600, margin: 10 }}>
                        <InputGroup.Text id="basic-addon2">Unit Number</InputGroup.Text>
                        <FormControl
                            placeholder="Name"
                            aria-label="Username"
                            aria-describedby="basic-addon2"

                        />


                    </InputGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                    <InputGroup className="mb-3" style={{ height: '5%', width: 600, margin: 10 }}>
                        <InputGroup.Text id="basic-addon2">First Name</InputGroup.Text>
                        <FormControl
                            placeholder="Name"
                            aria-label="Username"
                            aria-describedby="basic-addon2"

                        />


                    </InputGroup>
                    <InputGroup className="mb-3" style={{ height: '5%', width: 600, margin: 10 }}>
                        <InputGroup.Text id="basic-addon2">Last Name</InputGroup.Text>
                        <FormControl
                            placeholder="Name"
                            aria-label="Username"
                            aria-describedby="basic-addon2"

                        />


                    </InputGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                    <InputGroup className="mb-3" style={{ height: '5%', width: 600, margin: 10 }}>
                        <InputGroup.Text id="basic-addon2">Telephone Number</InputGroup.Text>
                        <FormControl
                            placeholder="Name"
                            aria-label="Username"
                            aria-describedby="basic-addon2"

                        />


                    </InputGroup>

                    <InputGroup className="mb-3" style={{ height: '5%', width: 600, margin: 10 }}>
                        <InputGroup.Text id="basic-addon2">Citizen ID/Corporate ID</InputGroup.Text>
                        <FormControl
                            placeholder="Name"
                            aria-label="Username"
                            aria-describedby="basic-addon2"

                        />


                    </InputGroup>
                </div>

            </div>
            <div style={{ flex: 1 }}>
                <Button variant="outline-primary" onClick={onclick} style={{ width: '30%', marginRight: 20 }}>Follow</Button>
                <Button variant="outline-success" style={{ width: '30%', marginLeft: 20 }}>Request</Button>
            </div>

        </div>



    )
}