import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Subdomain: null,
        Organization: null,

        Sepet: [],
        SepettekiUrunler: [],
        ToplamFiyat: 0,
        Masa: null,

        webpSupport: null
    },
    mutations: {
        SetSepetKategori(state, data) {
            state.Sepet.push({
                id: data.id,
                products: [data.products]
            });

            const urun = state.Organization.menu.find((x) => x._id == data.id);
            const _urun = urun.products.find((x) => x._id == data.products.id);
            _urun.count = data.products.count
            _urun.comment = data.products.comment
            _urun.id = data.id

            state.SepettekiUrunler.push(_urun);
        },

        SetSepetUrun(state, data) {
            const kategori = state.Sepet.find((x) => x.id == data.id);
            const ayniurun = kategori.products.find(x => x.id == data.products.id)
            if (!ayniurun) {
                kategori.products.push(data.products);

                const urun = state.Organization.menu.find((x) => x._id == data.id);
                const _urun = urun.products.find((x) => x._id == data.products.id);
                _urun.count = data.products.count
                _urun.comment = data.products.comment
                _urun.id = data.id

                state.SepettekiUrunler.push(_urun);
            }
            else {
                ayniurun.count += data.products.count
                ayniurun.comment += '\n' + data.products.comment
                const sepettekiUrun = state.SepettekiUrunler.find(x => x._id == data.products.id)
                sepettekiUrun.count = ayniurun.count
                sepettekiUrun.comment = ayniurun.comment
            }
        },

        SetMasa(state, data) {
            state.Masa = data;
        },

        DeleteSepet(state, data) {
            const kategori = state.Sepet.find(x => x.id == data.cat)
            const kategoriIndex = state.Sepet.findIndex(x => x.id == data.cat)
            const urun = kategori.products.findIndex(x => x.id == data.id)
            kategori.products.splice(urun, 1)
            if (kategori.products.length < 1)
                state.Sepet.splice(kategoriIndex, 1)
            state.SepettekiUrunler.splice(data.index, 1)
        },

        SetSepetUrunCount(state, data) {
            const kategori = state.Sepet.find(x => x.id == data.cat)
            const urun = kategori.products.find(x => x.id == data.id)
            urun.count = data.count
        },

        // --------

        SetOrganization(state, data) {
            state.Organization = data
        }
    },
    actions: {
        KategoriSet({
            commit
        }, data) {
            commit("SetKategoriler", data);
        },

        UrunSet({
            commit
        }, data) {
            commit("SetUrunler", data);
        },

        SepetSet({
            commit
        }, data) {
            // id: "catid",
            // products: {
            //     id: "iddd",
            //     count: 1,
            //     comment: "lorem ipsum dolor sit amet"
            // }
            const sepet = this.state.Sepet;
            const kategori = sepet.find((x) => x.id == data.id);
            if (!kategori) {
                commit("SetSepetKategori", data);
            } else {
                commit("SetSepetUrun", data);
            }
        },

        MasaSet({
            commit
        }, data) {
            commit("SetMasa", data);
        },

        DeleteSepetItem({
            commit
        }, data) {
            commit("DeleteSepet", data)
        },

        SepetUrunCountSet({ commit }, data) {
            // {cat: 1, id: 1, count: 1}
            commit("SetSepetUrunCount", data)
        },

        // ---------------------------

        FetchIsletme({ commit }, callback) {
            fetch(process.env.VUE_APP_SERVER + 'org/' + this.state.Subdomain)
                .then(res => res.json())
                .then(data => {
                    commit('SetOrganization', data)
                    callback()
                })
        }
    },
    getters: {
        ToplamSepet: (state) => {
            return state.SepettekiUrunler.length;
        },

        Slider1: (state) => {
            return `${process.env.VUE_APP_AWS}${state.Organization.settings.Slider1}.${state.webpSupport}`
        },

        Slider2: (state) => {
            return `${process.env.VUE_APP_AWS}${state.Organization.settings.Slider2}.${state.webpSupport}`
        },

        Slider3: (state) => {
            return `${process.env.VUE_APP_AWS}${state.Organization.settings.Slider3}.${state.webpSupport}`
        },

        Urunler: (state) => (id) => {
            return state.Organization.menu.find(x => x._id == id).products
        },

        Urun: (state) => (cat, id) => {
            const Urunler = state.Organization.menu.find(x => x._id == cat).products
            return Urunler.find(x => x._id == id)
        },
    }
});
