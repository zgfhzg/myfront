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
        { title: '계약금', amount: 1500000 , date: '24/09/01', name: 'A' },
        { title: '사진', amount: 500000, date: '24/09/20', name: 'A' },
        { title: '비행기', amount: 5000000, date: '24/10/22', name: 'A' },
    ]);

    const columns: Column<Data>[] = [
        { Header: '항목', accessor: 'title' },
        { Header: '금액', accessor: 'amount' },
        { Header: '날짜', accessor: 'date' },
        { Header: '결제자', accessor: 'name' },
    ];

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const elements = [
        { type: 'text', name: 'title', placeholder: '항목' },
        { type: 'number', name: 'amount', placeholder: '가격' },
        { type: 'date', name: 'date', placeholder: '날짜', className: 'wid100' },
        { type: 'checkbox', name: 'name', title: '결제자', options: ['A', 'B'] },
    ];

    const totalPrice = data.reduce((sum, row) => sum + row.amount, 0);
    const addRow = (subData: Record<string, any>) => {
        const newData: Data = {
            title: subData.title,
            amount: Number(subData.amount),
            date: format(subData.date, 'yy/MM/dd'),
            name: subData.name,
        }
        setRows([...data, newData]);
    }

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
                    <Dialog isOpen={isDialogOpen} onClose={closeDialog} onSubmit={addRow} title={"경비 사용 내역"} elements={elements}/>
                    <div className="button right" onClick={save}>저장</div>
                </div>
                <Table tableId="budgetTable" columns={columns} data={data} totalPrice={totalPrice} isTfoot={true}/>
            </div>
        </div>
    )
}
