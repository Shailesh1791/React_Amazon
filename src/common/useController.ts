import { useContext } from "../hooks/provider";
import { dashboardMappingService } from '../services';

const useController = () => {
    const [store] = useContext();
    const apiMethods = dashboardMappingService();

    return {
        store,
        apiMethods
    }
};

export default useController;