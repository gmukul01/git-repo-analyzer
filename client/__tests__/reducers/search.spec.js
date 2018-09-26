import reducer, { initialState } from "reducers/search";
import { fetchRepoDetails, fetchRepoDetailsSuccess, fetchRepoDetailsFailure, clearSearchResult, addToSearchHistory, setSearchTableLoadingState, fetchSearchHistory, fetchSearchHistorySuccess, fetchSearchHistoryFailure } from "actions/search";

describe("Search reducer", () => {
  it("should give initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle CLEAR_SEARCH_RESULT action", () => {
    const state = {
      ...initialState,
      result: { dummy: "dummy" },
      history: ["dummy"]
    };
    expect(reducer(state, clearSearchResult())).toEqual({ ...initialState, history: ["dummy"] });
  });

  it("should handle SET_SEARCH_TABLE_LOADING_STATE action when isLoading is false", () => {
    const state = {
      ...initialState,
      isLoading: true
    };
    expect(reducer(state, setSearchTableLoadingState(false))).toEqual({ ...state, isLoading: false });
  });

  it("should handle SET_SEARCH_TABLE_LOADING_STATE action when isLoading is true", () => {
    const state = {
      ...initialState,
      isLoading: false
    };
    expect(reducer(state, setSearchTableLoadingState(true))).toEqual({ ...state, isLoading: true });
  });

  it("should handle FETCH_REPO_DETAILS action", () => {
    expect(reducer(initialState, fetchRepoDetails({ dummy: "dummy" }))).toEqual({ ...initialState, isLoading: true });
  });

  it("should handle FETCH_REPO_DETAILS_SUCCESS action", () => {
    const state = {
        ...initialState,
        isLoading: true,
        errorMessage: "Dummy message"
      },
      dummyRepoDetails = {
        dummy: "dummy"
      },
      action = fetchRepoDetailsSuccess(dummyRepoDetails);

    expect(reducer(state, action)).toEqual({ ...initialState, result: dummyRepoDetails });
  });

  it("should handle FETCH_REPO_DETAILS_FAILURE action", () => {
    expect(reducer(initialState, fetchRepoDetailsFailure("Dummy error message"))).toEqual({ ...initialState, errorMessage: "Dummy error message" });
  });

  it("should handle FETCH_SEARCH_HISTORY action", () => {
    expect(reducer(initialState, fetchSearchHistory())).toEqual({ ...initialState, isLoading: true });
  });

  it("should handle FETCH_SEARCH_HISTORY_SUCCESS action", () => {
    const state = {
        ...initialState,
        isLoading: true,
        errorMessage: "Dummy message"
      },
      dummySearchHistory = [
        {
          dummy: "dummy"
        }
      ],
      action = fetchSearchHistorySuccess(dummySearchHistory);

    expect(reducer(state, action)).toEqual({ ...initialState, history: dummySearchHistory });
  });

  it("should handle FETCH_SEARCH_HISTORY_FAILURE action", () => {
    expect(reducer(initialState, fetchSearchHistoryFailure("Dummy error message"))).toEqual({ ...initialState, errorMessage: "Dummy error message" });
  });
});
