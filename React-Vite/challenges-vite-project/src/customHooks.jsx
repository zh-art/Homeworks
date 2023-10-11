import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    return (
        <div>
            <h1>MultipleCustomHooks</h1>
            <hr />

            {
                isLoading ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{data[0]?.quote}</p>
                        <footer className="blockquote-footer">{data[0]?.author}</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={() => increment}>Next quote</button>
            <button className="btn btn-primary" onClick={() => decrement}>Previous quote</button>
            <button className="btn btn-primary" onClick={() => reset}>Initial quote</button>

        </div>
    )
}