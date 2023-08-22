import { toTimeAgo } from "../../utils";
import "./style.scss"

export default function ActiveContact() {
    const userList = [
        {
            name: "Shelby Goode",
            status: "Online",
            avt: "./img/Shelby_Goode.png",
            color: "#d5d3ff",
            timeOnline: Date.now() - 60 * 5 * 1000
        },
        {
            name: "Robert Bacins",
            status: "Busy",
            avt: "./img/Robert_Bacins.png",
            color: "#ee37ff33",
            timeOnline: Date.now() - 60 * 3 * 1000
        },
        {
            name: "John Carilo",
            status: "Online",
            avt: "./img/John_Carilo.png",
            color: "#26c0e233",
            timeOnline: Date.now() - 60 * 1 * 1000,
        },
        {
            name: "Adriene Watson",
            status: "Online",
            avt: "./img/Adriene_Watson.png",
            color: "#26c0e233",
            timeOnline: Date.now() - 60 * 4 * 1000,
        },
    ];
    return (
        <div className="con-active">
            <p className="con-active__title">Active</p>
            <ul className="con-active__list">
                {
                    userList.map((item, i) => {
                        return <Item key={i} user={item} />
                    })
                }
            </ul>
        </div>
    );
}

function Item({ user }) {

    const { avt, name, status, color, timeOnline } = user

    const style = { backgroundColor: color }
    
    const statusClass = ["item"]
    if (status === 'Online') {
        statusClass.push("item--online")
    }
    else {
        statusClass.push("item--busy")
    }

    return (
        <li className={statusClass.join(" ")}>
            <div className="item__image" style={style}>
                <img src={avt} alt="Eddie Lobanovskiy" />
            </div>
            <div className="item__info">
                <p className="item__name">{name}</p>
                <p className="item__status">{status}</p>
            </div>
            <p className="item__time">{toTimeAgo(timeOnline)}</p>
        </li>
    );
}
