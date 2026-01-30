/* Testing out new template! Might not completely work, but oh well! */
#pragma region setup
 
#pragma GCC optimize("Ofast,unroll-loops,inline-functions")
#pragma GCC target("avx,avx2,bmi,bmi2,lzcnt,popcnt")
#include <bits/stdc++.h>
using namespace std;
 
#pragma region files
 
/*
#define INPUTFILE ""
#define OUTPUTFILE ""
*/
 
void inline static io() {
    #ifdef INPUTFILE 
        freopen(INPUTFILE, "r", stdin);
    #endif
    #ifdef OUTPUTFILE 
        freopen(OUTPUTFILE, "w", stdout);
    #endif
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
}
 
#pragma endregion
 
#pragma region helpers
// These might be messed up so be careful
 
#pragma region smallfuncs
 
#define all(x) x.begin(), x.end()
#define loc(x) #x:
#define elif else if
#define what_is(x) cerr << #x << " is " << x << endl;
typedef long long ll;
 
#pragma endregion
 
#pragma region bigfuncs
 
template<typename T = int>
struct range {
    T a, b, c;  range(T b) noexcept : a(0), b(b), c(1) {};  range(T a, T b) noexcept : a(a), b(b), c(1) {};  range(T a, T b, T c) noexcept : a(a), b(b), c(c) {}
    struct it {T v, s;  T operator*() const noexcept { return v; } it& operator++() noexcept {v += s; return *this;}  bool operator!=(const it& o) const noexcept {return (s > 0) ? (v < o.v) : (v > o.v);}};
     it begin() const noexcept { return {a, c}; };  it end() const noexcept { return {b, c}; }};
 
template<typename C>
C& slice(const C& c, std::size_t a, std::size_t b) noexcept {
    a = min(a, c.size()); b = min(b, c.size()); a = min(a, b);
    return C(c.begin() + a, c.begin() + b);}
 
#pragma endregion
 
#pragma region midfuncs
 
template <typename... Args>
[[noreturn]] static void inline print(const Args... args) noexcept {((cout << args << ' '), ...); cout << '\n';}
template <typename... Args>
[[noreturn]] static void inline _print(const auto& sep, const auto& end, const Args... args) noexcept {((cout << args << sep), ...); cout << end;}
template <typename T = vector<int>, typename sz = int>
[[noreturn]] static void inline readvec(T vec, const sz& size) noexcept {for(sz i : range{size}) cin >> vec[i];}
template<typename T = int, typename C>
T& len(const C& c) noexcept { return static_cast<T>(c.size()); }
 
#pragma endregion
 
#pragma endregion
 
#pragma region assumes
 
#if __cplusplus>=202302L
#define assume(x) [[assume(x)]]
#elif defined(__GNUC__)
#define assume(x) ((x) ? (void)0 : __builtin_unreachable())
#elif defined(_MSC_VER)
#define assume(x) __assume(x)
#else
#define assume(x) ((void)0)
#endif
 
# pragma endregion
 
#pragma endregion
 
int main() noexcept {
    io();
    static int A, B;
    cin >> A >> B;
    assume(A <= 10e9); assume(B <= 10e9);
    cout << A + B;
    return 0;
}
