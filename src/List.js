import React, {Component} from 'react';
import Elements from './Elements';
import './nav.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [
                {
                    fullName: "Cameron Martin",
                    address: "388 Mayfield Drive; Ottumwa, IA 52501",
                    seniority: 10
                },
                {
                    fullName: "Wendy Dyer",
                    address: "9302 Foxrun Avenue; Greensboro, NC 27405",
                    seniority: 5
                },
                {
                    fullName: "Yvonne Wright",
                    address: "8540 Branch Ave.; New York, NY 10002",
                    seniority: 3
                },
                {
                    fullName: "Melanie Peake",
                    address: "8293 E. Hamilton Street; Aliquippa, PA 15001",
                    seniority: 7
                },
                {
                    fullName: "Richard Allan",
                    address: "9164 Race Ave.; Pueblo, CO 81001",
                    seniority: 8
                },
                {
                    fullName: "Sean Jones",
                    address: "7315 Summer St.; Desoto, TX 75115",
                    seniority: 2
                },
                {
                    fullName: "Warren Wright",
                    address: "9065 Lakeshore Road; Oconomowoc, WI 53066",
                    seniority: 9
                },
                {
                    fullName: "Eric Hughes",
                    address: "76 Brook St.; Orlando, FL 32806",
                    seniority: 6
                },
                {
                    fullName: "Ryan Rees",
                    address: "965 NW. Riverview Lane; Dekalb, IL 60115",
                    seniority: 1
                },
                {
                    fullName: "Keith Sharp",
                    address: "8237 Golden Star Road; Brookline, MA 02446",
                    seniority: 4
                }
            ]
        }
    }
    render() {
        let list = this.state.groups.map(el => (
            <Elements fullName={el.fullName} address={el.address} seniority={el.seniority} />
        ))

        return (
            <div className="lists">
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default List;