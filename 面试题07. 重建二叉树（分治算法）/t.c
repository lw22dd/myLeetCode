#include <stdio.h>
#include <string.h>

#define MAXN 20
typedef enum {false, true} bool;

bool palindrome( char *s );

int main()
{
    char s[MAXN];
    
    scanf("%s", s);
    if ( palindrome(s)==true )
        printf("Yes\n");
    else
        printf("No\n");
    printf("%s\n", s);

    return 0;
}

/* 你的代码将被嵌在这里 */
bool palindrome( char *s )
{
    int l=strlen(s),zhong;
    char a[l+1],b[l+1];
    if(l==1||l==2)return true;
    if(l%2==0) zhong=l/2-1;
    else zhong=(l-1)/2;
    for(int i=0;i<=zhong;i++)
    {
        a[i]=s[i];
    }
     a[zhong + 1] = '\0';
    for(int j=0,i=l-1;j<=zhong,i>=zhong;i--,j++)
    {
        b[j]=s[i];
    }
    b[zhong + 1] = '\0';
    if(strcmp(a,b)==0) return true;
    else return false;
}