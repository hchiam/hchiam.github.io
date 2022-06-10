export default function addUrlQueryWithoutRefreshingPage(query: string): void {
  if (window.history) {
    const urlWithQuery: string = window.location.origin + "/?" + query;
    window.history.pushState({ path: urlWithQuery }, "", urlWithQuery);
  }
}
