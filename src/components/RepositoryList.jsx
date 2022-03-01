import { RepositoryItem } from "./RepositoryItem";

/*
Retornar uma listagem de repositórios dentro do componente abaixo.
*/

const repository = {
    name: 'Unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
    return (
        <section className="repostiroy-list">
            <h1>Lista de repositórios</h1>

            <ul>
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}