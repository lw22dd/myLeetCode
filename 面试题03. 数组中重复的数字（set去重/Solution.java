import java.util.Arrays;

class Solution {
    public int findRepeatNumber(int[] nums) {
        Arrays.sort(nums);
        for (int i = 0;; ++i) {
            if (nums[i] == nums[i + 1]) {
                return nums[i];
            }
        }
    }
    public static void main(String[] args) {
        System.out.println(new Solution().findRepeatNumber(new int[] {2, 3, 1, 0, 2, 5, 3}));
    }
}