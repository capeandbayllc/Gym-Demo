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
          <input
            v-model="selected.single.five"
            type="checkbox"
            id="single_five"
          />
          <label for="single_five">$120 + Tax</label>
        </td>
        <td>
          <input
            v-model="selected.single.ten"
            type="checkbox"
            id="single_ten"
          />
          <label for="single_ten">$205 + Tax</label>
        </td>
        <td>
          <input
            v-model="selected.single.twenty"
            type="checkbox"
            id="single_twenty"
          />
          <label for="single_twenty">$395 + Tax</label>
        </td>
        <td>
          <input
            v-model="selected.single.thirty"
            type="checkbox"
            id="single_thirty"
          />
          <label for="single_thirty">$550 + Tax</label>
        </td>
      </tr>

      <tr>
        <td>Group (2)</td>
        <td>
          <input
            v-model="selected.group_two.five"
            type="checkbox"
            id="two_five"
          />
          <label for="two_five">$70 + Tax</label>
        </td>
        <td>
          <input
            v-model="selected.group_two.ten"
            type="checkbox"
            id="two_ten"
          />
          <label for="two_ten">$115 + Tax</label>
        </td>
        <td>
          <input
            v-model="selected.group_two.twenty"
            type="checkbox"
            id="two_twenty"
          />
          <label for="two_twenty">$195 + Tax</label>
        </td>
        <td>
          <input
            v-model="selected.group_two.thirty"
            type="checkbox"
            id="two_thirty"
          />
          <label for="two_thirty">$280 + Tax</label>
        </td>
      </tr>

      <tr>
        <td>Group (3-4)</td>
        <td>
          <input
            v-model="selected.group_three_four.five"
            type="checkbox"
            id="three_thirty"
          />
          <label for="three_thirty">$55 + Tax</label>
        </td>
        <td>
          <input
            v-model="selected.group_three_four.ten"
            type="checkbox"
            id="three_thirty"
          />
          <label for="three_thirty">$90 + Tax</label>
        </td>
        <td>
          <input
            v-model="selected.group_three_four.twenty"
            type="checkbox"
            id="three_thirty"
          />
          <label for="three_thirty">$140 + Tax</label>
        </td>
        <td>
          <input
            v-model="selected.group_three_four.thirty"
            type="checkbox"
            id="three_thirty"
          />
          <label for="three_thirty">$190 + Tax</label>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { type ISelectionState, sessionSelectionDefault } from "./helpers";

interface Props {
  selected: ISelectionState;
}

const props = withDefaults(defineProps<Props>(), {
  selected: () => sessionSelectionDefault,
});

const selected: Ref<ISelectionState> = ref(props.selected);
</script>
