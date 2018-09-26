import { call, put, takeLatest, all } from "redux-saga/effects";

import { ADD_TO_SEARCH_HISTORY, FETCH_REPO_DETAILS, FETCH_SEARCH_HISTORY } from "constants/actionTypes";
import { addToSearchHistoryFailure, clearSearchResult, fetchRepoDetailsSuccess, fetchRepoDetailsFailure, fetchSearchHistorySuccess, fetchSearchHistoryFailure, setSearchTableLoadingState } from "actions/search";
import fetch from "util/fetch";
import * as URL from "constants/urls";
import searchSaga, { fetchSearchHistory, fetchRepoDetails, saveToSearchHistory } from "sagas/Search";

describe("Search saga tests", () => {
  const response = {
      data: "dummySearch"
    },
    error = "some error";

  describe("fetchRepoDetails", () => {
    const params = { data: "dummyData" };
    it("should make an api call", () => {
      const gen = fetchRepoDetails(params);
      expect(gen.next().value).toEqual(
        call(fetch, {
          url: URL.SEARCH_URL,
          method: "post",
          data: params.data
        })
      );
    });

    it("should call fetchRepoDetailsSuccess with data on success", () => {
      const gen = fetchRepoDetails(params);
      gen.next();
      expect(gen.next({ response }).value).toEqual(put(fetchRepoDetailsSuccess(response.data)));
    });

    it("should call fetchRepoDetailsFailure on failure", () => {
      const gen = fetchRepoDetails(params);
      gen.next();
      expect(gen.next({ error }).value).toEqual(put(fetchRepoDetailsFailure("some error")));
    });
  });

  describe("saveToSearchHistory", () => {
    const params = { repoName: "repoName", htmlUrl: "htmlUrl" };
    it("should call setSearchTableLoadingState with true", () => {
      const gen = saveToSearchHistory(params);
      expect(gen.next().value).toEqual(put(setSearchTableLoadingState(true)));
    });
    it("should make an api call", () => {
      const gen = saveToSearchHistory(params);
      gen.next();
      expect(gen.next().value).toEqual(
        call(fetch, {
          url: URL.SAVE_SEARCH,
          method: "post",
          data: params
        })
      );
    });

    it("should call setSearchTableLoadingState with false and clearSearchResult on success", () => {
      const gen = saveToSearchHistory(params);
      gen.next();
      gen.next();
      expect(gen.next({ response }).value).toEqual(put(setSearchTableLoadingState(false)));
      expect(gen.next({ response }).value).toEqual(put(clearSearchResult()));
    });

    it("should call fetchSearchHistorySuccess on failure", () => {
      const gen = saveToSearchHistory(params);
      gen.next();
      gen.next();
      expect(gen.next({ error }).value).toEqual(put(addToSearchHistoryFailure("some error")));
    });
  });

  describe("fetchSearchHistory", () => {
    it("should make an api call", () => {
      const gen = fetchSearchHistory();
      expect(gen.next().value).toEqual(
        call(fetch, {
          url: URL.SEARCH_HISTORY,
          method: "get"
        })
      );
    });

    it("should call fetchSearchHistorySuccess on success", () => {
      const gen = fetchSearchHistory();
      expect(gen.next().value).toEqual(
        call(fetch, {
          url: URL.SEARCH_HISTORY,
          method: "get"
        })
      );

      expect(gen.next({ response }).value).toEqual(put(fetchSearchHistorySuccess("dummySearch")));
    });

    it("should call fetchSearchHistorySuccess on failure", () => {
      const gen = fetchSearchHistory();
      gen.next();
      expect(gen.next({ error }).value).toEqual(put(fetchSearchHistoryFailure("some error")));
    });
  });

  it("should listen FETCH_REPO_DETAILS, FETCH_SEARCH_HISTORY, ADD_TO_SEARCH_HISTORY", () => {
    const gen = searchSaga();
    expect(gen.next().value).toEqual(all([takeLatest(FETCH_REPO_DETAILS, fetchRepoDetails), takeLatest(FETCH_SEARCH_HISTORY, fetchSearchHistory), takeLatest(ADD_TO_SEARCH_HISTORY, saveToSearchHistory)]));
  });
});
