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
        <td>$70 + Tax</td>
        <td>$115 + Tax</td>
        <td>$195 + Tax</td>
        <td>$280 + Tax</td>
      </tr>

      <tr>
        <td>Group (3-4)</td>
        <td>$55 + Tax</td>
        <td>$90 + Tax</td>
        <td>$140 + Tax</td>
        <td>$190 + Tax</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const selected = ref({
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
