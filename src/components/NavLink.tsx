interface IProps {
    text: string
    url: string
}

export default function NavLink({text, url} : IProps) {

    return (
        <li className="mt-2 hover:bg-blue-100 transition rounded-r">
            <a className="pl-5 pr-2 py-2 block text-gray-800" href={url}>{text}</a>
        </li>
    )
}  
