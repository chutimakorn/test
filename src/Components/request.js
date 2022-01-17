import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Request as requestfrom } from "../API/API_FUNC";
import swal from "sweetalert2";
import { useSelector } from "react-redux";
export default function Request() {

    const [files, setFiles] = useState({
        allFile: [],
    });
    const { ownRequest, auth } = useSelector(
        (state) => state
    );

    //State สำหรับ เปลี่ยนค่าใน text
    const [requestFrom, setRequestFrom] = useState({

        SR_E_Mail: "",
        SR_Citizen: "",
        SR_ID_Number: "",
        share: "",
        SR_Name: "",
        SR_Surname: "",
        SR_Mobile: "",
        SR_Line_ID: "",
        SR_Line_Token: "",
        Status: ""
    });



    useEffect(() => {
        async function onLoadData() {
            setRequestFrom({
                SR_E_Mail: ownRequest.email,
                SR_Citizen: ownRequest.citizen,
                SR_ID_Number: ownRequest.idNumber,
                share: ownRequest.share,
                SR_Name: ownRequest.name,
                SR_Surname: ownRequest.surname,
                SR_Mobile: ownRequest.mobile,
                SR_Line_ID: auth.lineID,
                SR_Line_Token: auth.lineToken,
                Status: ownRequest.status
            });

        }
        onLoadData();
    }, []);

    //ดักค่าเปลี่ยน
    const setValueChange = async (data, SetValue) => {
        await setRequestFrom({
            ...requestFrom,
            [SetValue]: data.target.value,
        });

        console.log("setValueChange", requestFrom)
    };

    //checkTtpeFile
    var checkTypeFile = (fileName) => {
        var typefile = {
            acceptedFileTypes: ["pdf", "jpg", "jpeg", "png"],
        };
        var accepted = "invalid",
            acceptedFileTypes = typefile.acceptedFileTypes,
            regex;
        for (var i = 0; i < acceptedFileTypes.length; i++) {
            regex = new RegExp("\\." + acceptedFileTypes[i] + "$", "i");
            if (regex.test(fileName)) {
                accepted = "valid";
                break;
            } else {
                accepted = "badFileName";
            }
        }
        return accepted;
    };

    const uploadFile = (e) => {
        var fileUp = e.target.files;
        let invalidType = 0;
        if (fileUp && fileUp.length > 0) {
            let fileList = files.allFile;
            for (var i = 0; i < fileUp.length; i++) {
                var checkType = checkTypeFile(fileUp[i].name);
                if (checkType === "valid") {
                    fileList.push(fileUp[i]);
                } else {
                    invalidType++;
                }
            }
            setFiles({ ...files, allFile: fileList });
            console.log(files);
        }
        if (invalidType !== 0) {
            swal
                .fire({
                    title: "invalid file type",
                    text:
                        invalidType + " files, cannot accept this file type at this time",
                    icon: "error",
                })
                .then((value) => { });
        }


    }

    const deleteFile = (file, index) => {
        const newFiles = files.allFile; // copy of Original State
        newFiles.splice(index, 1);
        setFiles({ ...files, allFile: newFiles });
        // setFiles([...files], newFiles);
    };

    const onSave = async () => {
        let fileList = files.allFile;
        console.log("fileList",files.allFile.length)
        if (requestFrom.SR_E_Mail == "" || requestFrom.SR_Citizen == "" || requestFrom.SR_ID_Number == "" || requestFrom.SR_Name == "" || requestFrom.SR_Surname == "" || requestFrom.SR_Mobile == "" || fileList.length == 0) {
            swal
                .fire({
                    title: "Create Request",
                    text: "Please complete the information.",
                    icon: "error",
                })
        } else {
            const requestData = {
                SR_E_Mail: requestFrom.SR_E_Mail,
                SR_Citizen: requestFrom.SR_Citizen,
                SR_ID_Number: requestFrom.SR_ID_Number,
                SR_Name: requestFrom.SR_Name,
                SR_Surname: requestFrom.SR_Surname,
                SR_Mobile: requestFrom.SR_Mobile,
                SR_Line_ID: requestFrom.SR_Line_ID,
                SR_Line_Token: requestFrom.SR_Line_Token,
            };

            const jObj = JSON.stringify(requestData);
            let request = await requestfrom(jObj, requestFrom.share, "R", files);

            if(request == null){
                swal
                .fire({
                    title: "Create Request",
                    text: "Can not connect to server",
                    icon: "error",
                })
            }else{
                if (request.errorStatus === false) {
                    swal
                        .fire({
                            title: "Create Request",
                            text: "Save request data successfull",
                            icon: "success",
                        })
                } else {
                    swal
                        .fire({
                            title: "Create Request",
                            text: request.errorMessage,
                            icon: "error",
                        })
                }
    
                console.log("CREA", request);
            }
           
        }

    }

    return (

        <>
            <div style={{ flex: 1, display: 'flex', alignSelf: 'center', flexDirection: 'column' }}>
                <img src="https://www.inventech.co.th/wp-content/uploads/2017/09/invlogo_bb.png" style={{ height: 100 }} />
                <p>บริษัท อินเวนท์เทค ซิสเท็มส์ (ประเทศไทย) จำกัด</p>
                <p>การประชุมสามัญผู้ถือหุ้น ประจำปี 2564</p>
                <p>หมายเหตุ : หากพบปัญหาในการยื่นแบบคำร้อง กรุณาติดต่อที่เบอร์ 02-021-9121 </p>

            </div>



            <div style={{ flexDirection: 'column', display: 'flex', flex: 20, marginTop: 10, marginBottom: '1rem', border: 'thin solid', borderRadius: '20px' }}>
                <div style={{ flexDirection: 'row', display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }}>

                    <div className="container-input">
                        <input
                            placeholder="อีเมล(Email)"
                            className="inputbox-underline"
                            onChange={(text) => {
                                setValueChange(text, "SR_E_Mail");
                            }}
                            value={requestFrom.SR_E_Mail}
                        />
                        <label className="label-absolute">อีเมล(Email)</label>


                    </div>

                    <div className="container-input">
                        <input
                            placeholder="เลขประจำตัวประชาชน(Citizen ID)"
                            className="inputbox-underline"
                            onChange={(text) => {
                                setValueChange(text, "SR_Citizen");
                            }}
                            value={requestFrom.SR_Citizen}
                        />
                        <label className="label-absolute">เลขประจำตัวประชาชน(Citizen ID)</label>


                    </div>
                </div>

                <div style={{ flexDirection: 'row', display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }}>

                    <div className="container-input">
                        <input
                            placeholder="เลขทะเบียนผู้ถือหน่วยลงทุน(Unitholder ID)"
                            className="inputbox-underline"
                            onChange={(text) => {
                                setValueChange(text, "SR_ID_Number");
                            }}
                            value={requestFrom.SR_ID_Number}
                        />
                        <label className="label-absolute">เลขทะเบียนผู้ถือหน่วยลงทุน(Unitholder ID)</label>


                    </div>

                    <div className="container-input">
                        <input
                            placeholder="จำนวนหน่วยลงทุน(Unit Number)"
                            className="inputbox-underline"
                            onChange={(text) => {
                                setValueChange(text, "share");
                            }}
                            value={requestFrom.share}
                        />
                        <label className="label-absolute">จำนวนหน่วยลงทุน(Unit Number)</label>


                    </div>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly' }}>

                    <div className="container-input">
                        <input
                            placeholder="ชื่อ(First Name)"
                            className="inputbox-underline"
                            onChange={(text) => {
                                setValueChange(text, "SR_Name");
                            }}
                            value={requestFrom.SR_Name}
                        />
                        <label className="label-absolute">ชื่อ(First Name)</label>


                    </div>

                    <div className="container-input">
                        <input
                            placeholder="นามสกุล(Last Name)"
                            className="inputbox-underline"
                            onChange={(text) => {
                                setValueChange(text, "SR_Surname");
                            }}
                            value={requestFrom.SR_Surname}
                        />
                        <label className="label-absolute">นามสกุล(Last Name)</label>


                    </div>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly', marginBottom: 0 }}>

                    <div className="container-input">
                        <input
                            placeholder="เบอร์โทรศัพท์(Telephone Number)"
                            className="inputbox-underline"
                            onChange={(text) => {
                                setValueChange(text, "SR_Mobile");
                            }}
                            value={requestFrom.SR_Mobile}
                        />
                        <label className="label-absolute">เบอร์โทรศัพท์(Telephone Number)</label>


                    </div>

                    <div className="container-input">
                        <div style={{ fontFamily: 'sans-serif', textAlign: 'center', display: 'flex' }}>
                            <label className="custom-file-upload">
                                <input type="file" onChange={(e) => uploadFile(e)} />
                                <i className="fa fa-cloud-upload" /> เอกสารแนบ
                            </label>
                            {files.allFile.map((fi, index) =>
                                <div className="file-preview" onClick={() => deleteFile(fi, index)}>{fi.name}</div>
                            )}
                        </div>

                    </div>

                </div>



                <div style={{ fontFamily: 'sans-serif', flexDirection: 'column', display: 'flex', textAlign: 'start' }}>
                    <div style={{ color: 'red', marginLeft: 10, fontSize: 10 }}>1. เอกสารหนังสือเชิญประชุม (ถ้ามี)</div>

                    <div style={{ color: 'red', marginLeft: 10, fontSize: 10, marginBottom: 10 }}>2. เอกสารสำเนาบัตรประชาชน (พร้อมเซ็นต์สำเนาถูกต้อง)</div>

                </div>







            </div>
            <div style={{ flexDirection: 'column', display: 'flex', flex: 3, fontSize: 17, border: 'thin solid', borderRadius: '10px', backgroundColor: '#6c757d26' }}>
                Status : {requestFrom.Status === "W" ? "Waiting" : requestFrom.Status === "R" ? "Reject" : "No Request"}
            </div>
            <div style={{ flex: 1 }}>
                {/* <div className="button-Search">
                    Follow

                </div> */}
                <div className="button-Filter" onClick={() => {
                    onSave();
                }}>
                    Request

                </div>

            </div>


        </>

    )
}