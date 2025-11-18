export default function Header({todos}) {
    const tasks = todos.length;
    const isTasksPlural = tasks != 1;

    return (
        <header>
            <h1 className="text-gradient">You have {tasks} open {isTasksPlural ? 'tasks' : 'task'}.</h1>
        </header>
    );
}