'use client'
import Table from "@/components/table";
import {Column} from "react-table";
import {useEffect, useRef, useState} from "react";
import {format} from "date-fns";

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
    const nameRef = useRef<HTMLInputElement>(null);
    
    const totalPrice = data.reduce((sum, row) => sum + row.amount, 0);
    const addRow = () => {
        if (titleRef.current && amountRef.current && dateRef.current && nameRef.current) {
            const row: Data = {
                title: titleRef.current.value,
                amount: parseFloat(amountRef.current.value),
                date: format(new Date(dateRef.current.value), 'yy/MM/dd'),
                name: nameRef.current.value,
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
    return (
        <div id="main">
            <div className="inner">
                <h1 id="pageTitle" className="subtitle">Budget Calculation</h1>
                <Table tableId="budgetTable" columns={columns} data={data} totalPrice={totalPrice}/>
                <input type="text" ref={titleRef} placeholder="항목"/>
                <input type="number" ref={amountRef} placeholder="금액"/>
                <input type="date" ref={dateRef} placeholder="날짜" value={date} onChange={handleChange}/>
                <input type={"checkbox"} name={"pay"} value={"SH"} ref={nameRef}/><label>SH</label>
                <input type={"checkbox"} name={"pay"} value={"YB"} ref={nameRef}/><label>YB</label>
                <button onClick={addRow}>추가 테스트</button>
            </div>
        </div>
    )
}
