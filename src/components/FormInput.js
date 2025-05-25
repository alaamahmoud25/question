import React, { useState } from 'react'
import { Row, Form, Col } from 'react-bootstrap' // Removed unused Button import

const FormInput = ({ onAdd, notify }) => {
    const [qu, setQu] = useState('')
    const [an, setAn] = useState('')

    const addNewItem = () => {
        if (qu.trim() === "" || an.trim() === "") {
            notify("من فضلك اكمل البيانات", "Error")
            return
        }

        const newQuestion = {
            id: Math.random(),
            q: qu.trim(),
            a: an.trim()
        }

        onAdd(newQuestion) // Pass the new question to parent component
        setQu('')
        setAn('')
    }
    return (
        <Row className="my-3">
            <Col sm="5">
                <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="ادخل السوال" />
            </Col>

            <Col sm="5">
                <Form.Control value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="ادخل الاجابه" />
            </Col>
            <Col sm="2">
                <button onClick={addNewItem} className="btn-color w-100" type="submit">
                    اضافة
                </button>
            </Col>
        </Row>
    )
}

export default FormInput
