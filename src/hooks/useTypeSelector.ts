import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducers";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
