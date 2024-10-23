'use client'
import Table from "@/components/table";
import {Column} from "react-table";
import {useState} from "react";

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
    
    const totalPrice = data.reduce((sum, row) => sum + row.amount, 0);
    const addRow = () => {
        const row = { title: '새항목', amount: 1000000, date: '24/10/23', name: 'SH' };
        setRows([...data, row]);
    }
    
    return (
        <div id="main">
            <div className="inner">
                <h1 id="pageTitle" className="subtitle">Budget Calculation</h1>
                <Table tableId="budgetTable" columns={columns} data={data} totalPrice={totalPrice} />
                <button onClick={addRow}>추가 테스트</button>
            </div>
        </div>
    )
}
