<template>
  <table>
    <thead>
      <tr>
        <td></td>
        <td>5 Sessions</td>
        <td>10 Sessions</td>
        <td>20 Sessions</td>
        <td>30 Sessions</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Single</td>
        <td>
          <label for="single_five">$120 + Tax</label>
          <input
            v-model="selected.single.five"
            type="checkbox"
            id="single_five"
          />
        </td>
        <td>
          <label for="single_ten">$205 + Tax</label>
          <input
            v-model="selected.single.ten"
            type="checkbox"
            id="single_ten"
          />
        </td>
        <td>
          <label for="single_twenty">$395 + Tax</label>
          <input
            v-model="selected.single.twenty"
            type="checkbox"
            id="single_twenty"
          />
        </td>
        <td>
          <label for="single_thirty">$550 + Tax</label>
          <input
            v-model="selected.single.thirty"
            type="checkbox"
            id="single_thirty"
          />
        </td>
      </tr>

      <tr>
        <td>Group (2)</td>
        <td>
          <label for="two_five">$70 + Tax</label>
          <input
            v-model="selected.group_two.five"
            type="checkbox"
            id="two_five"
          />
        </td>
        <td>
          <label for="two_ten">$115 + Tax</label>
          <input
            v-model="selected.group_two.ten"
            type="checkbox"
            id="two_ten"
          />
        </td>
        <td>
          <label for="two_twenty">$195 + Tax</label>
          <input
            v-model="selected.group_two.twenty"
            type="checkbox"
            id="two_twenty"
          />
        </td>
        <td>
          <label for="two_thirty">$280 + Tax</label>
          <input
            v-model="selected.group_two.thirty"
            type="checkbox"
            id="two_thirty"
          />
        </td>
      </tr>

      <tr>
        <td>Group (3-4)</td>
        <td>
          <label for="three_thirty">$55 + Tax</label>
          <input
            v-model="selected.group_three_four.five"
            type="checkbox"
            id="three_thirty"
          />
        </td>
        <td>
          <label for="three_thirty">$90 + Tax</label>
          <input
            v-model="selected.group_three_four.ten"
            type="checkbox"
            id="three_thirty"
          />
        </td>
        <td>
          <label for="three_thirty">$140 + Tax</label>
          <input
            v-model="selected.group_three_four.twenty"
            type="checkbox"
            id="three_thirty"
          />
        </td>
        <td>
          <label for="three_thirty">$190 + Tax</label>
          <input
            v-model="selected.group_three_four.thirty"
            type="checkbox"
            id="three_thirty"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
interface IFeeGroup {
  five: boolean;
  ten: boolean;
  twenty: boolean;
  thirty: boolean;
}

interface ISelectionState {
  single: IFeeGroup;
  group_two: IFeeGroup;
  group_three_four: IFeeGroup;
}

const selected: Ref<ISelectionState> = ref({
  single: {
    five: false,
    ten: false,
    twenty: false,
    thirty: false,
  },
  group_two: {
    five: false,
    ten: false,
    twenty: false,
    thirty: false,
  },
  group_three_four: {
    five: false,
    ten: false,
    twenty: false,
    thirty: false,
  },
});
</script>
