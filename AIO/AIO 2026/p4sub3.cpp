#include <bits/stdc++.h>
using namespace std;
#define int long long

signed main() {
  int n; cin >> n;
  vector<int> v(n);
  for(int i = 0; i < n; i++) cin >> v[i];
  
  vector<vector<int>> dp(n+1, vector<int>(10002, -1));
  // dp[i][test] := max score at position i, with volume test-1

  for(int i = 1; i <= n; i++) {
    for(int test = 1; test <= 10000; test++) {
      for(int delta = -1; delta <= 1; delta++) {
        if(dp[i-1][test+delta] == -1) continue;
        dp[i][test] = max(dp[i][test]
}
