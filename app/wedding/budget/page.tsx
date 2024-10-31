'use client'
import Table from "@/components/table";
import {Column} from "react-table";
import React, {useEffect, useRef, useState} from "react";
import {format} from "date-fns";
import Dialog from "@/components/dialog";

interface Data {    // 데이터 구조체
    title: string;
    amount: number;
    date: string;
    name: string;
}

export default function Budget() {
    const [data, setRows] = useState([  // 실제 데이터 값
        { title: '계약금', amount: 1500000 , date: '24/09/01', name: 'SH' },
        { title: '사진', amount: 500000, date: '24/09/20', name: 'SH' },
        { title: '비행기', amount: 5000000, date: '24/10/22', name: 'SH' },
    ]);

    const columns: Column<Data>[] = [
        { Header: '항목', accessor: 'title' },
        { Header: '금액', accessor: 'amount' },
        { Header: '날짜', accessor: 'date' },
        { Header: '결제자', accessor: 'name' },
    ];

    const titleRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const aRef = useRef<HTMLInputElement>(null);
    const bRef = useRef<HTMLInputElement>(null);
    
    const totalPrice = data.reduce((sum, row) => sum + row.amount, 0);
    const addRow = () => {
        if (titleRef.current && amountRef.current && dateRef.current && aRef.current && bRef.current) {
            const checkValue = [];
            if (aRef.current.checked) {
                checkValue.push(aRef.current.value);
            }
            if (bRef.current.checked) {
                checkValue.push(bRef.current.value);
            }
            const row: Data = {
                title: titleRef.current.value,
                amount: parseFloat(amountRef.current.value),
                date: format(new Date(dateRef.current.value), 'yy/MM/dd'),
                name: checkValue.join("/"),
            };
            setRows([...data, row]);
        }
    }
    const [date, setDate] = useState('');
    useEffect(() => {
        const today = new Date().toISOString().substring(0, 10);
        setDate(today);
    }, []);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    }

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const inputContent = '<input type="text" ref={titleRef} placeholder="항목"/>\n' +
        '                <input type="number" ref={amountRef} placeholder="금액"/>\n' +
        '                <input type="date" class="wid100" ref={dateRef} placeholder="날짜" value={date} onChange={handleChange}/>\n' +
        '                <label><input type="checkbox" name={"pay"} ref={aRef} value={"A"}/>A</label>\n' +
        '                <label><input type="checkbox" name={"pay"} ref={bRef} value={"B"}/>B</label>';
    const [htmlContent, setHtmlContent] = useState(inputContent);

    function save() {
        console.log('save');
        // rest api에 저장 request
    }

    return (
        <div id="main">
            <div className="inner">
                <h1 id="pageTitle" className="subtitle">Budget Calculation</h1>
                <div>
                    <div className="button left plus" onClick={openDialog}>추가</div>
                    <Dialog isOpen={isDialogOpen} onClose={closeDialog} htmlContent={htmlContent} title={"경비 사용내역 추가"} onSave={addRow}/>
                    <div className="button right" onClick={save}>저장</div>
                </div>
                <Table tableId="budgetTable" columns={columns} data={data} totalPrice={totalPrice} isTfoot={true}/>
            </div>
        </div>
    )
}
