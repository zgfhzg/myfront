import Table from "@/components/table";
import {Column} from "react-table";

interface Data {    // 데이터 구조체
    name: string;
    age: number;
    city: string;
}

const data: Data[] = [  // 실제 데이터 값
    { name: 'John', age: 28, city: 'New York' },
    { name: 'Jane', age: 22, city: 'San Francisco' },
    { name: 'Mike', age: 32, city: 'Chicago' },
];

const columns: Column<Data>[] = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'City', accessor: 'city' },
];

export default function Budget() {
    return (
        <div id="main">
            <div className="inner">
                <h1 id="homeTitle">Wedding Budget Calculation</h1>
                <Table columns={columns} data={data} />
            </div>
        </div>
    )
}
