package com.cachecats.meituan.widget;

import android.content.Context;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;

import com.bumptech.glide.Glide;
import com.cachecats.meituan.R;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

/**
 * Created by solo on 2018/1/15.
 * 主页的四个广告图片
 */

public class HomedeliverView extends LinearLayout {

    @BindView(R.id.deli)
    ImageView deli;

    public HomedeliverView(Context context) {
        this(context, null, 0);
    }

    public HomedeliverView(Context context, @Nullable AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public HomedeliverView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        View view = View.inflate(context, R.layout.view_home_deli, this);
        ButterKnife.bind(view);
    }

    @OnClick({R.id.deli})
    public void onViewClicked(View view) {
        switch (view.getId()) {
            case R.id.deli:
                onAdsClickListener.onAds1Click();
                break;

        }
    }

    /**
     * 设置广告的资源id，从左到右从上到下依次排列
     * 加载本地图片
     *
     * @param list
     */
    public void setAdsResource(List<Integer> list) {
        if (list == null || list.size() != 4) {
            return;
        }
        Glide.with(this).load(list.get(0)).into(deli);

    }

    /**
     * 设置广告的资源id，从左到右从上到下依次排列
     * 加载网络图片
     *
     * @param list
     */
    public void setAdsUrl(List<String> list) {
        if (list == null || list.size() != 4) {
            return;
        }
        Glide.with(this).load(list.get(0)).into(deli);

    }

    private OnAdsClickListener onAdsClickListener;

    public interface OnAdsClickListener {
        void onAds1Click();


    }

    public void setOnAdsClickListener(OnAdsClickListener onAdsClickListener) {
        this.onAdsClickListener = onAdsClickListener;
    }
}
