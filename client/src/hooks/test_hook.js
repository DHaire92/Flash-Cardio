import { useCallback } from 'react';

const useTestHook = () => {
    const testServer = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:5000/test-server', {
                method: 'GET',
            });

            if (response.ok) {
                console.log('Test was good!');
            } else {
                console.error('response not ok!');
            }
        } catch (error) {
            console.error('Test failed!', error);
        }
    }, []);

    return { testServer };
};

export default useTestHook;
