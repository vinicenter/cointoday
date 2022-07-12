<script setup lang="ts">
import axios from '@/lib/axios';
import { sendNotificationByObject } from '@/lib/vue3-notification';
import { saveEntityCache, getEntityCache } from '@/lib/localStorage';
import content from '@/content.json';
import logo from '@/assets/logo.png';

import InputComponent from '@/components/core/form/InputComponent.vue';
import TextComponent from '@/components/core/TextComponent.vue';
import IconComponent from '@/components/core/IconComponent.vue';
import DataListComponent from '@/components/core/form/DataListComponent.vue';
</script>

<script lang="ts">
export default {
  data() {
    return {
      entity: {
        from: 'BRL',
        to: 'USD',
        amountFrom: 1,
        amountTo: 0,
      },
      coins: {
        crypto: [],
        fiat: [],
      },
    };
  },
  created() {
    this.loadEntityFromCache();
    this.loadCoinsList();
    this.update();
  },
  methods: {
    loadEntityFromCache() {
      const entityCache = getEntityCache();
      if (!(entityCache == null)) {
        this.entity = entityCache;
      }
    },
    loadCoinsList() {
      axios.get('/list').then((response) => {
        this.coins = response.data;
      });
    },
    invertCoins() {
      const {
        to,
        from,
        amountFrom,
        amountTo,
      } = this.entity;

      this.entity.from = to;
      this.entity.to = from;
      this.entity.amountTo = amountFrom;
      this.entity.amountFrom = amountTo;
      sendNotificationByObject(content.notifications.config.invertCoins);
    },
    updateAmountTo(
      from : string,
      to : string,
      amount : number,
    ) {
      axios.get(`/convert/${from}/${to}?amount=${amount}`).then((response) => {
        this.entity.amountTo = response.data[to].toFixed(2);
        sendNotificationByObject(
          content.notifications.convert.success,
        );
      }).catch(() => {
        sendNotificationByObject(
          content.notifications.convert.error,
        );
      });
    },
    update() {
      this.updateAmountTo(
        this.entity.from.toUpperCase(),
        this.entity.to.toUpperCase(),
        this.entity.amountFrom,
      );
      saveEntityCache(this.entity);
    },
  },
  computed: {
    getCoinList() {
      const coinsReturn : Array<Object> = [];

      this.coins.crypto.forEach((entity) => {
        coinsReturn.push({
          value: entity,
          name: entity,
        });
      });

      this.coins.fiat.forEach((entity) => {
        coinsReturn.push({
          value: entity,
          name: entity,
        });
      });

      return coinsReturn;
    },
  },
  components: {
    InputComponent,
    IconComponent,
    TextComponent,
  },
};
</script>

<template>
  <div>
    <div class="col d-flex justify-content-center flex-column align-items-center">
      <img
        :src="logo"
        alt="app logo"
        class="app_logo"
      />
      <TextComponent>
        {{ content.app_description }}
      </TextComponent>

      <div>
        <DataListComponent
          id="coinsDataList"
          :list="getCoinList"
        />

        <InputComponent
          name="from"
          label=""
          list="coinsDataList"
          placeholder="From"
          v-model="entity.from"
          @change="update()"
        />

        <InputComponent
          name="amountFrom"
          label=""
          type="number"
          placeholder="Amount From"
          v-model="entity.amountFrom"
          @change="update()"
        />

        <div class="d-flex justify-content-center">
          <IconComponent
            tabindex="0"
            icon="ph-swap"
            @click="invertCoins()"
            @keydown.enter="invertCoins()"
          />

          <IconComponent
            tabindex="0"
            icon="ph-arrows-clockwise"
            @click="update()"
            @keydown.enter="update()"
          />
        </div>

        <InputComponent
          name="To"
          label=""
          list="coinsDataList"
          placeholder="To"
          v-model="entity.to"
          @change="update()"
        />

        <InputComponent
          name="amountTo"
          label=""
          type="number"
          placeholder="Amount To"
          v-model="entity.amountTo"
          :isReadonly="true"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app_logo {
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 1001px) {
    width: 70%;
  }
}
</style>
