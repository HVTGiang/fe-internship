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
        <div class="con-active">
            <p class="con-active__title">Active</p>
            <ul class="con-active__list">
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

    const style = { backgroundColor: user.color }
    const statusClass = ["item"]
    if (user.status === 'Online') {
        statusClass.push("item--online")
    }
    else {
        statusClass.push("item--busy")
    }

    return (
        <li class={statusClass.join(" ")}>
            <div class="item__image" style={style}>
                <img src={user.avt} alt="Eddie Lobanovskiy" />
            </div>
            <div class="item__info">
                <p class="item__name">{user.name}</p>
                <p class="item__status">{user.status}</p>
            </div>
            <p class="item__time">{toTimeAgo(user.timeOnline)}</p>
        </li>
    );
}
